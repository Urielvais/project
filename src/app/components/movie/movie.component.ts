import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  title = 'Movie Component Works!!';
  @Input() listOfMovies: string[] | undefined;
 
  ngOnInit() {
    console.log('Movies On linit');
   }


  ngOnChanges(chenges: SimpleChanges): void {
  console.log(chenges)
  }
  }

