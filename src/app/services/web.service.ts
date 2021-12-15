import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WebService { 
 
	async init(){ 
		await this.httpClient.get<any[]>('http://localhost:4445/users', {
			headers:new HttpHeaders({
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type',
				'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
			})
		})
		.subscribe(data => {  
				this.posts= new BehaviorSubject(data);
				this.postsB= new BehaviorSubject(data);
				this.posts$ = this.posts.asObservable();
				this.postsB$ = this.postsB.asObservable(); 
				console.log(data);
			},
			error => {}
		);
	} 

	constructor(private httpClient: HttpClient) { }

	posts = new BehaviorSubject([]);
  	postsB = new BehaviorSubject([]);

  	posts$ = this.posts.asObservable();
  	postsB$ = this.postsB.asObservable();

	updatePost(id: number, key: any, value: any) { 
		const currentData = this.posts.getValue();
    	const newData = currentData.map((postData) => {
      		if (postData.id !== id) {
        		return postData;
      		}
      		return {
        		...postData, [key]: value,
			};
    	});
    	this.posts.next(newData);
  	}

  	updatePostB(id: number, key: any, value: any) { 
    	const currentData = this.postsB.getValue();
    	const newData = currentData.map((postData) => {
			if (postData.id !== id) {
				return postData;
			}
			return {
				...postData, [key]: value,
			};
		});
    	this.postsB.next(newData);
    }
}
