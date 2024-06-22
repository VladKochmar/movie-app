import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Sidebar } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [RouterLink, SidebarModule, ButtonModule, MenuModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
})
export class MenuSidebarComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Top Rate',
            icon: 'pi pi-star',
            route: '/top-rate',
          },
          {
            label: 'Popular',
            icon: 'pi pi-trophy',
            route: '/',
          },
          {
            label: 'Now Playing',
            icon: 'pi pi-play-circle',
            route: '/now-playing',
          },
          {
            label: 'Upcoming',
            icon: 'pi pi-sparkles',
            route: '/upcoming',
          },
        ],
      },
    ];
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
