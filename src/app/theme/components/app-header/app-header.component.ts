import { Component, OnInit } from "@angular/core";
import { IUserProfile, UserService } from "~/core";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.less"],
})
export class AppHeaderComponent implements OnInit {
  userProfile: IUserProfile = new IUserProfile();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userProfile$.subscribe((res) => {
      console.log("收到数据", res);
      if (res.statusCode !== 200) {
      }
    });
  }
}
