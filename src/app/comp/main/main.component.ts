import { Component, OnInit, ViewChild } from '@angular/core';
import { Package } from 'src/app/package';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  closeResult!: string;

  packages: Package[] = [
    { img: 'assets/kheerganga-1.jpg', name: 'KheerGanga Trek', days: 4, cost: 5000, discount: 20, checked: false },
    { img: 'assets/kedarnath-1.jpg', name: 'KedarNath Trek', days: 6, cost: 7500, discount: 30, checked: false },
    { img: 'assets/manali-1.jpg', name: 'Manali Trek', days: 5, cost: 7000, discount: 10, checked: false },
    { img: 'assets/shimla.jpg', name: 'Shimla', days: 2, cost: 3000, discount: 20, checked: false },
    { img: 'assets/manali.jpg', name: 'Kullu-Manali', days: 4, cost: 6000, discount: 10, checked: false},
    { img: 'assets/kheerganga.jpg', name: 'KheerGanga Pass', days: 5, cost: 5500, discount: 25, checked: false },
    { img: 'assets/kedarnath.jpg', name: 'KedarNath', days: 5, cost: 6000, discount: 25, checked: false },
    { img: 'assets/nainital.jpg', name: 'Nainital', days: 2, cost: 4500, discount: 5, checked: false },
    { img: 'assets/mussoorie.jpeg', name: 'Mussoorie', days: 3, cost: 4000, discount: 0, checked: false },
    { img: 'assets/nainital-1.jpg', name: 'NainiTal Trek', days: 3.5, cost: 4000, discount: 10, checked: false },
  ];

  bool: boolean = false;
  printArr: Package[] = [];
  compareArr: Package[] = [];

  constructor(private modalService: NgbModal) {
    this.printArr = this.packages
  }

  search1(key: string) {
    this.printArr = [];
    this.bool = true
    this.printArr = this.getSearchedPackage(key)

    if(this.printArr.length == 0) {
      alert("Sorry your Search didn't matched our Packages, try using some different keyword!!!")
      this.printArr = this.packages
      return;
    }
  }

  getSearchedPackage(key:string):Package[] {
    return this.packages.filter((p)=>p.name.toUpperCase().includes(key.toUpperCase()));
  }

  updateVal(name: string): any {
    var p1 = this.packages.find((p) => p.name == name)!
    p1.checked = !p1.checked
    console.log(p1.checked)
  }

  ngOnInit(): void {
    // if(this.head.bool) {
    //   this.packs = this.head.arr
    // }
  }

  Compare(): Package[] {
    return this.packages.filter((p) => p.checked == true);
  }

  open(content: any) {
    this.compareArr = this.Compare()
    if(this.compareArr.length < 2) {
      alert("Select at least 2 packages to Compare")
      return;
    }

    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });

    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // checkCheckBoxvalue(event:any){
  //   console.log(event.checked)
  // }

  sortAscDays() {
    this.printArr.sort((a,b) => a.days - b.days)
  }

  sortAscCost() {
    this.printArr.sort((a,b) => a.cost - b.cost)
  }

  sortAscDiscount() {
    this.printArr.sort((a,b) => a.discount - b.discount)
  }

  sortDescDays() {
    this.printArr.sort((a,b) => b.days - a.days)
  }

  sortDescCost() {
    this.printArr.sort((a,b) => b.cost - a.cost)
  }

  sortDescDiscount() {
    this.printArr.sort((a,b) => b.discount - a.discount)
  }

}
