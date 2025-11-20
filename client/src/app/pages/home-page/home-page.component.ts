import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private pokemonService: PokemonService ) {}

  pokemon: any;
  ngOnInit(): void {
  }
  getPokemon(name : string) {
    this.pokemonService.getPokemon(name).subscribe({
      next: (data) => {
        console.log('Pokemon Data:', data);
        this.pokemon = data;
      },
      error: (err) => {
        console.error('HTTP Error:', err);
      }
    });
  }
}
