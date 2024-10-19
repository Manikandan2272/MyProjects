import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  movieName: string = "";
  data: any[] = [];

  constructor(private movieSer: UserService) { }

  ngOnInit(): void {

  }

  doSearch() {
    if (this.movieName != '') {
      this.movieSer.movieAPI(this.movieName).subscribe((res) => {
        console.log(res);
        this.data.splice(0, 1, res);
      });
    }
  }

}