// src/app/models/work-status.enum.ts

export enum Role {
  Admin = 1,
  User = 2,
  Guest = 3
}

export enum WorkStatus {
  Pending = "pending",
  Draft = "draft",
  InReview = "in review",
  Approved = "approved",
  Rejected = "rejected",
  Updated = "updated",
  Archived = "archived",
  Completed = "completed",
  InProgress = "in progress"
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
