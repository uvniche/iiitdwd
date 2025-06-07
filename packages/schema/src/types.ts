// Define common types used across the schema
export interface BaseDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Add more types as needed from the content project 