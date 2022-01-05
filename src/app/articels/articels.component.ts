import { Component, OnInit } from '@angular/core';
import { IArticle } from '../models/articel.intarface';
import { ArticleApiService } from '../services/article-api.service';
import { FormGroup, FormControl } from '@angular/forms';

interface myData {
  obj: Object;
}

@Component({
  selector: 'app-articels',
  templateUrl: './articels.component.html',
  styleUrls: ['./articels.component.scss'],
})
export class ArticelComponent implements OnInit {
  constructor(private articleApiService: ArticleApiService) {}

  title: String = '';
  description: String = '';
  content: String = '';

  onTitleChange(event: any) {
    this.title = event.target.value;
  }
  onDescriptionChange(event: any) {
    this.description = event.target.value;
  }
  onContentChange(event: any) {
    this.content = event.target.value;
  }

  createArticle(event: any) {
    const newData = {
      title: this.title,
      description: this.description,
      content: this.content,
    };
    this.articleApiService.createArticles(newData).subscribe((data: any) => {
      console.log(data);
    });
    console.log(newData);
  }

  public articles: Array<IArticle> = [];

  ngOnInit(): void {
    this.articleApiService.getAllArticles().subscribe((data: any) => {
      console.log(data);
      this.articles = data.articels;
    });
  }
}
