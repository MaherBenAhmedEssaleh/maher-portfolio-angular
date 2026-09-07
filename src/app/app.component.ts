import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Sun, Moon, ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Server, Database, Layers3, Menu, X, Download, Send, Sparkles } from 'lucide-angular';

@Component({selector:'app-root',standalone:true,imports:[CommonModule,FormsModule,LucideAngularModule],templateUrl:'./app.component.html',styleUrl:'../styles.css'})
export class AppComponent {
  readonly icons={Sun,Moon,ArrowDown,ArrowUpRight,Github,Linkedin,Mail,MapPin,Code2,Server,Database,Layers3,Menu,X,Download,Send,Sparkles};
  dark=window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false; menu=false; sent=false; active='Accueil';
  projects=[{title:'Votre prochain projet',description:'Ajoutez ici une réalisation personnelle : contexte, rôle, résultats et technologies utilisées.',tags:['À compléter'],type:'Projet personnel',image:'assets/projects/project-placeholder.jpg'},{title:'Votre prochain projet',description:'Ajoutez ici une réalisation personnelle : aperçu de l’interface et lien vers la démonstration.',tags:['À compléter'],type:'Projet personnel',image:'assets/projects/project-placeholder.jpg'}];
  posts=[{date:'À venir',title:'Construire une API REST robuste avec Spring Boot',excerpt:'Article à ajouter : architecture, validation, gestion des erreurs et bonnes pratiques.'},{date:'À venir',title:'Angular : composants réutilisables et performance',excerpt:'Article à ajouter : organisation, UX et optimisation des interfaces.'},{date:'À venir',title:'Déployer une application avec Docker et CI/CD',excerpt:'Article à ajouter : conteneurs, pipeline et mise en production.'}];
  toggleTheme(){this.dark=!this.dark; document.body.classList.toggle('dark',this.dark)}
  scroll(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});this.menu=false}
  submit(){this.sent=true}
  @HostListener('window:scroll') onScroll(){for(const id of ['accueil','apropos','competences','projets','blog','contact']){const el=document.getElementById(id);if(el && scrollY>=el.offsetTop-180)this.active=id} }
}