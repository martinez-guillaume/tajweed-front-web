
import { Component, OnInit } from "@angular/core";
import { EntityService } from "../../../core/services/entity.service";
import { HttpHeaders } from "@angular/common/http"; 
import { Entity } from "../../../core/models/entity.model";

@Component({
  selector: "entities",
  templateUrl: "./entity.component.html",
  styleUrls: ["./entity.component.scss"],
  standalone: true,
  providers: [EntityService],
})
export class EntityComponent implements OnInit {

  entities: Entity[] = [];

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    const password = "a2086833-13ae-4ecb-802b-c12ac3870d4b";
    this.performAuthorizedRequest(password);
  }

  private createAuthorizationHeader(password: string): HttpHeaders {
    const base64Auth = btoa(`user:${password}`);
    return new HttpHeaders({
      Authorization: "Basic " + base64Auth,
    });
  }

  private performAuthorizedRequest(password: string) {
    const headers = this.createAuthorizationHeader(password);
    this.entityService.getEntities({ headers }).subscribe(
      (response: Entity[]) => {
        console.log("Réponse du backend pour entities: ", response);
        this.entities = response;
      },
      (error) => {
        console.log("Erreur lors de la requête:", error);
      }
    );
  }
}
