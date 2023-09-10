import { Component, Input, OnInit } from '@angular/core';
import { QuranService } from '../../quran.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true
})
export class ValidationComponent implements OnInit {
  
  @Input() selectedStudent: any;
  audiosStudent: any[] = [];
  audiosTeacher: any[] = [];
  Coran: any[] = [];
  selectedSurahText: string | undefined;
  showQuran: boolean = false;
  totalSourate: boolean[][] = [];
  selectedStudentId: string | null = null;
  students: any[] = [];
  
  constructor(private quranService: QuranService) {}
 
  
  ngOnInit() {
    
    
    this.getLanguages();
  }

  getLanguages() {
    this.quranService.getLanguages().subscribe((data: any) => {
      this.Coran = data.data.surahs;
      this.totalSourate = this.Coran.map(sourate => []);
    });
  }
  showSurahText(sourate: any) {
    this.selectedSurahText = sourate.text;
  }
  toggleBackgroundColor(sourateIndex: number, ayahIndex: number) {

    if (!this.totalSourate[sourateIndex]) {
      this.totalSourate[sourateIndex] = [];
    }
    this.totalSourate[sourateIndex][ayahIndex] = !this.totalSourate[sourateIndex][ayahIndex];
    console.log('Numéro du verset cliqué :', ayahIndex);
  }
  showStudentCard(student: any) {
    // Implémentez la logique pour afficher la carte de l'étudiant ici
    console.log('Afficher la carte de l\'étudiant :', student);
  }
}
