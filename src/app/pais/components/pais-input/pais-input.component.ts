import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter:EventEmitter<string>= new EventEmitter();//Se pone entre <> el tipo de valor a emitir
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();

  @Input() placeholder!:string;

  debouncer:Subject<string>= new Subject();

  termino:string="";
  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300))
    .subscribe((respo:any)=>{
        this.onDebounce.emit(respo);
    });
  }

  public buscar(){
    this.onEnter.emit(this.termino);

  }
  public teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
