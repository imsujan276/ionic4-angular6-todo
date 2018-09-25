import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  info={};

  constructor(private route: ActivatedRoute,
    public router: Router) {
      firebase.database().ref('todo/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
        console.log(resp)
        this.info = snapshotToObject(resp);
      });
    }

  ngOnInit() {
  }

  edit(key){
    console.log(key)
    this.router.navigate(['/edit/'+key]);
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;
  return item;
}
