import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { Subject, Observable } from "rxjs";
import { map, startWith, switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  constructor(public webService : WebService) { }
  tabs = ["Work Requests", "Work Providers"];
  seletedTab = "Work Requests";
  loadMore: Boolean = true;
  refreshPostData = new Subject<boolean>();
  refreshPostData$ = this.refreshPostData.asObservable();
  totalPostData = 0;
  postsData$ = this.refreshPostData$.pipe(
    startWith(true),
    switchMap((_) =>
    this.getDataBasedOnTab().pipe(
        map((postData) =>
          postData.filter((d) => {
            const date = new Date();
            const postDate = new Date(d.date);
            const fourtyEightHours = new Date(
              date.setHours(date.getHours() - 48)
            );

            return fourtyEightHours < postDate;
          })
        ),
        map((postData) =>
          postData.sort((a, b) => {
            var dateA = new Date(a.date).getTime();
            var dateB = new Date(b.date).getTime();
            return dateA > dateB ? -1 : 1;
          })
        ),
        tap((postData) => {
          this.totalPostData = postData.length;
        }),
        map((postData) => {
          if (this.loadMore) {
            return postData.slice(0, 5);
          } else {
            return postData;
          }
        })
      )
    )
  );

  ngOnInit() {}

  getDataBasedOnTab(): Observable<any>  {
    switch (this.seletedTab) {
      case "Work Requests":
        return this.webService.posts$;
      case "Work Providers":
        return this.webService.postsB$;
      default:
        return this.webService.posts$;
    }
  }

  onLoadMoreClick() {
    this.loadMore = false
    this.refreshPostData.next(true);
  }

  onTabClicked(tab) {
    this.loadMore = true;
    this.seletedTab = tab;
    this.refreshPostData.next(true);
  }

  
  onAcceptClick(selectedPost: any) {
    if (!selectedPost) return;

    if (this.seletedTab === "Work Requests") {
      return this.updatePost(selectedPost, this.webService.posts.getValue());
    }

    if (this.seletedTab === "Work Providers") {
      return this.updatePost(selectedPost, this.webService.postsB.getValue());
    }
  }

  updatePost(selectedPost, postDataSnapshot) {
    const currentPost = postDataSnapshot.find(
      (post) => post.id === selectedPost.id
    );

    if (!currentPost) return;

    const postId = currentPost.id;
    const status = !!!currentPost.isAccepted;

    if (this.seletedTab === "Work Requests") {
      return this.webService.updatePost(postId, "isAccepted", status);
    }

    if (this.seletedTab === "Work Providers") {
      return this.webService.updatePostB(currentPost.id, "isAccepted", status);
    }
  }

}
