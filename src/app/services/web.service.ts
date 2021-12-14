import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  posts = new BehaviorSubject([
   {
     id: 1,
     userId : 100,
     name: "Arun Varma",
     details: "jhony's post", isAccepted : false,
     date : "Fri, 8 Dec 2021 17:23:20 GMT",
     address : "Address A",
     contact : 564564564565
   },
   {
    id: 2,
    userId : 101,
    name: "Sheela Manu",
    details: "User 1 needs help installing their new wireless router" ,
     isAccepted : false,
    date : "Wed, 23 Dec 2021 17:23:20 GMT",
    address : "Address B",
    contact : 564564564565
  },
  {
    id: 3,
    userId : 102,
    name: "jhony chand",
    details: "jhony's post", isAccepted : false,
    date : "Mon, 11 Dec 2021 17:23:20 GMT",
    address : "Address C",
    contact : 564564564565
  }, {
    id: 4,
    userId : 103,
    name: "Lola malu",
    details: "jhony's post", isAccepted : false,
    date : "Fri, 10 Dec 2021 17:23:20 GMT",
    address : "Address D",
    contact : 564564564565
  },
  {
   id: 5,
   userId : 104,
   name: "Veerappan KK",
   details: "jhony's post", isAccepted : false,
   date : "Wed, 23 Dec 2021 17:23:20 GMT",
   address : "Address E",
   contact : 564564564565
 },
 {
  id: 6,
  userId : 104,
  name: "Veerappan KK",
  details: "jhony's post", isAccepted : false,
  date : "Wed, 23 Dec 2021 17:23:20 GMT",
  address : "Address E",
  contact : 564564564565
},{
  id: 2,
  userId : 101,
  name: "Sheela Manu",
  details: "User 1 needs help installing their new wireless router" ,
   isAccepted : false,
  date : "Wed, 23 Dec 2021 17:23:20 GMT",
  address : "Address B",
  contact : 564564564565
},
{
  id: 3,
  userId : 102,
  name: "jhony chand",
  details: "jhony's post", isAccepted : false,
  date : "Mon, 11 Dec 2021 17:23:20 GMT",
  address : "Address C",
  contact : 564564564565
}, {
  id: 4,
  userId : 103,
  name: "Lola malu",
  details: "jhony's post", isAccepted : false,
  date : "Fri, 10 Dec 2021 17:23:20 GMT",
  address : "Address D",
  contact : 564564564565
},
{
 id: 5,
 userId : 104,
 name: "Veerappan KK",
 details: "jhony's post", isAccepted : false,
 date : "Wed, 23 Dec 2021 17:23:20 GMT",
 address : "Address E",
 contact : 564564564565
},
{
id: 6,
userId : 104,
name: "Veerappan KK",
details: "jhony's post", isAccepted : false,
date : "Wed, 23 Dec 2021 17:23:20 GMT",
address : "Address E",
contact : 564564564565
}




  ]);


  postsB = new BehaviorSubject([
    {
      id: 1,
      userId : 100,
      name: "Arun Varma",
      details: "jhony's post", isAccepted : false,
      date : "Fri, 14 Dec 2021 17:23:20 GMT",
      address : "Address A",
      contact : 564564564565
    },
    {
     id: 2,
     userId : 101,
     name: "Sheela Manu",
     details: "User 1 needs help installing their new wireless router" ,
      isAccepted : false,
     date : "Wed, 13 Dec 2021 17:23:20 GMT",
     address : "Address B",
     contact : 564564564565
   },
   {
     id: 3,
     userId : 102,
     name: "jhony chand",
     details: "jhony's post", isAccepted : false,
     date : "Mon, 18 Dec 2021 17:23:20 GMT",
     address : "Address C",
     contact : 564564564565
   }, {
     id: 4,
     userId : 103,
     name: "Lola malu",
     details: "jhony's post", isAccepted : false,
     date : "Fri, 10 Dec 2021 17:23:20 GMT",
     address : "Address D",
     contact : 564564564565
   },
   {
    id: 5,
    userId : 104,
    name: "Veerappan KK",
    details: "jhony's post", isAccepted : false,
    date : "Wed, 8 Dec 2021 17:23:20 GMT",
    address : "Address E",
    contact : 564564564565
  }
 
 
 
   ]);
 

   posts$ = this.posts.asObservable();
   postsB$ = this.postsB.asObservable();


  constructor() { }
  updatePost(id: number, key: any, value: any) {
    const currentData = this.posts.getValue();

    const newData = currentData.map((postData) => {
      if (postData.id !== id) {
        return postData;
      }

      return {
        ...postData,
        [key]: value,
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
        ...postData,
        [key]: value,
      };
    });

    this.postsB.next(newData);
  }
}
