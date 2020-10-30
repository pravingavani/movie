import { Component, OnInit }from '@angular/core';
import { MovieApiService } from '../shared/movie-api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  upComeData;
  topRateDate;
  
  constructor(private movieService: MovieApiService) { }

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((res)=>{
      this.topRateDate=res;
    });
    this.movieService.getUpcimmingMovies().subscribe((res)=>{
      this.upComeData=res;
    });
  }
}
