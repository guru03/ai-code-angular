export interface Topic {
  name: string;
  value: string;
}

export const TOPICS: Topic[] = [
  { name: 'angular_fundamentals',   value: 'Angular Fundamentals' },
  { name: 'components_templates',   value: 'Components & Templates' },
  { name: 'directives_pipes',       value: 'Directives & Pipes' },
  { name: 'dependency_injection',   value: 'Dependency Injection & Services' },
  { name: 'component_lifecycle',    value: 'Component Lifecycle' },
  { name: 'routing',                value: 'Routing' },
  { name: 'forms',                  value: 'Forms' },
  { name: 'http',                   value: 'HTTP & APIs' },
  { name: 'rxjs',                   value: 'RxJS' },
  { name: 'signals',                value: 'Signals' },
  { name: 'state_management',       value: 'State Management' },
  { name: 'angular_material',       value: 'Angular Material' },
  { name: 'advanced_angular',       value: 'Advanced Angular' },
  { name: 'ssr_hydration',          value: 'SSR & Hydration' },
  { name: 'testing',                value: 'Testing' },
  { name: 'performance',            value: 'Performance' },
  { name: 'security',               value: 'Security' },
  { name: 'build_deployment',       value: 'Build & Deployment' },
  { name: 'angular_ecosystem',      value: 'Angular Ecosystem' },
  { name: 'expert_angular',         value: 'Expert Angular' },
];
