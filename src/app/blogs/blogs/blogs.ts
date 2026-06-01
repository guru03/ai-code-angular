import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
}

@Component({
  selector: 'aic-blogs',
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {

  // Configured specifically to complement the Angular + Tailwind brand themes of your platform
  featuredPost: BlogPost = {
    id: 'unleashing-angular-signals',
    title: 'Unleashing Fine-Grained Reactivity with Angular Signals',
    excerpt: 'Say goodbye to unnecessary change detection cycles. Dive deep into how modern signals dramatically optimize UI re-rendering, bypass zone-based overhead, and boost your run-time performance tracking.',
    category: 'Angular Ecosystem',
    publishDate: 'May 28, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  };


  regularPosts: BlogPost[] = [
    {
      id: 'clean-architecture-frontend',
      title: 'Structuring Scale: Clean Architecture in Enterprise Frontends',
      excerpt: 'Explore isolated state domains, robust API abstraction layers, and explicit multi-app interface boundaries to ensure code maintainability across distributed developer engineering squads.',
      category: 'Architecture',
      publishDate: 'May 15, 2026',
      readTime: '9 min read',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Marcus Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'tailwind-css-optimization',
      title: 'Advanced Tailwind CSS Tricks for Performance Tuning',
      excerpt: 'From dynamic class safe-listing layouts to trimming down your final building pipeline layers, learn how to keep your utility style sheets blazing fast.',
      category: 'Tailwind CSS',
      publishDate: 'Apr 30, 2026',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'rxjs-operators-decoded',
      title: 'RxJS Operators Decoded: Mastering Streams & Race Conditions',
      excerpt: 'Avoid complex data leaking hazards by understanding switchMap, mergeMap, and exhaustMap behavior patterns. Manage your side effects cleanly.',
      category: 'Angular Ecosystem',
      publishDate: 'Mar 12, 2026',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'state-machines-ui',
      title: 'Building Predictable Web Apps Using Isolated State Machines',
      excerpt: 'Discover why handling complex interface components through robust finite automata eliminates state bugs and guarantees predictable system routing logs.',
      category: 'State Machine',
      publishDate: 'Feb 18, 2026',
      readTime: '11 min read',
      imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Marcus Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      }
    }
  ];



  // Sample data designed specifically around your site's tech stack focus
  blogPosts: BlogPost[] = [
    {
      id: 'unleashing-angular-signals',
      title: 'Unleashing Fine-Grained Reactivity with Angular Signals',
      excerpt: 'Say goodbye to unnecessary change detection cycles. Dive deep into how modern signals dramatically optimize UI re-rendering and boost your run-time performance tracking.',
      category: 'Angular Ecosystem',
      publishDate: 'May 28, 2026',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'clean-architecture-frontend',
      title: 'Structuring Scale: Clean Architecture in Enterprise Frontends',
      excerpt: 'Explore isolated state domains, robust API abstraction layers, and explicit multi-app interface boundaries to ensure code maintainability across multiple developer teams.',
      category: 'Architecture',
      publishDate: 'May 15, 2026',
      readTime: '9 min read',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Marcus Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      }
    },
    {
      id: 'tailwind-css-optimization',
      title: 'Advanced Tailwind CSS Tricks for Performance Tuning',
      excerpt: 'From dynamic class safe-listing layouts to trimming down your final building pipeline layers, learn how to keep your utility utility bundles blazing fast.',
      category: 'Tailwind CSS',
      publishDate: 'Apr 30, 2026',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
      }
    }
  ];

  categories: string[] = ['All Updates', 'Angular Ecosystem', 'Architecture', 'Tailwind CSS', 'State Machine'];
  selectedCategory = 'All Updates';

  ngOnInit(): void { }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    // Handle category filtering logic here
  }
}
