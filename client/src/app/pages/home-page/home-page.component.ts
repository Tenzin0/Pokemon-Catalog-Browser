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
  
  MAX_POKEMON: number = 151;
  ALL_POKEMON_LIST: any[] = [];
  pokemon: any;
  isLoadingAll = false;

  ngOnInit(): void {
    this.loadAllPokemon();
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

  loadAllPokemon() {
    this.ALL_POKEMON_LIST = [];
    const MAX = this.MAX_POKEMON;

    for (let id = 1; id <= MAX; id++) {
      this.pokemonService.getPokemon(id.toString()).subscribe({
        next: (data) => {
          this.ALL_POKEMON_LIST.push(data);

          this.ALL_POKEMON_LIST.sort((a, b) => a.id - b.id);
        },
        error: (err) => {
          console.error('Error fetching ID', id, err);
        }
      });
    }
  }

}
