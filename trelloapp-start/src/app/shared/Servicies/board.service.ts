import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Board, List } from '../models/board.model';
import { data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private data :Board = data;
  
  constructor() { }

  /**
   * Gets board 
   * @returns bords
   */
  getBoard() :Board {
    return this.data;
  }

  /**
   * Create list
   */
  createList(name:string) :void{
    let newList:List = {id :Date.now() , name:name,cards:[] }
    this.data.push(newList);

  }

  deleteList(idList:number) :void {
   let index = this.data.findIndex( list => list.id === idList);
   this.data.splice(index,1);


  }
  moveCard(listId: number, previousIndex: number, currentIndex: number): void {
    console.log('listId: ', listId);
    console.log('PI: ', previousIndex);
    console.log('CI: ', currentIndex);
    let list = this.data.find(item => item.id === listId);
    moveItemInArray(list.cards, previousIndex, currentIndex);
  }
}
