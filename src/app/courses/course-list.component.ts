import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CourseActions } from './course.actions';
import { store } from '../store';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course> //////
  courses: Course[];
  filteredCourses = this.courses;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private courseActions: CourseActions
    ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterCourses(searchText);
  }


  updateFromState() {
    const allState = store.getState();
    this.courses = allState.courses;
    this.filteredCourses = allState.courses;
  }

  ngOnInit() {
    ////this.courseActions.getCourses();
    this.updateFromState();
    // store.subscribe(() => {
    //   this.updateFromState();
    // });
    ////componentHandler.upgradeDom();
  }
}
