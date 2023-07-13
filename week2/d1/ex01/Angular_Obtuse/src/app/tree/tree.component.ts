import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'node_modules',
    children: [{name:'random'}]
  },
  {
    name: 'src',
    children:[
      {
        name:'app',
        children:[
          {
            name: 'tree',
            children: [
              {
                name:'tree.component.css',
              },
              {
                name:'tree.component.html',
              },
              {
                name:'tree.component.spec.ts',
              },
              {
                name:'tree.component.ts',
              }
            ]
          },
          {
            name:'app-routing.module.ts',
          },
          {
            name:'app.component,css',
          },
          {
            name:'app.component.html',
          },
          {
            name:'app.component.spec.ts',
          },
          {
            name:'app.component.ts',
          },
          {
            name:'app.module.ts',
          }
        ]
      },
      {
        name:'assets',
        children:[{name:'random'}]
      },
      {
        name: 'favicon.ico'
      },
      {
        name: 'index.html'
      },
      {
        name: 'main.ts'
      },
      {
        name: 'style.css'
      }
    ]
  },
  {
    name: '.editorconfig'
  },
  {
    name: '.gitignore'
  },
  {
    name: 'angular.json'
  },
  {
    name: 'package-lock.json'
  },
  {
    name: 'package.json'
  },
  {
    name: 'README.md'
  },
  {
    name: 'tsconfig.app.json'
  },
  {
    name: 'tsconfig.json'
  },
  {
    name: 'tsconfig.spec.json'
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  standalone:true,
  imports: [
    MatIconModule, MatButtonModule, MatTreeModule
  ]
})
export class TreeComponent {
  title = 'Angular_Obtuse';
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

