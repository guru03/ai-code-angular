// src/app/models/work-status.enum.ts

export enum Role {
  Admin = 1,
  User = 2,
  Guest = 3
}

export enum WorkStatus {
  Draft = 'draft',
  InReview = 'in_review',
  Approved = 'approved',
  Rejected = 'rejected',
  Archived = 'archived',
  Completed = 'completed',
  InProgress = 'in_progress'
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending'
}


export enum BlogStatus {
  Draft = 'Draft',
  Published = 'Published',
  Archived = 'Archived'
}
