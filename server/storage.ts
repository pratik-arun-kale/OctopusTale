// Simple in-memory storage implementation
// This replaces the previous database-dependent storage

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export class MemStorage {
  private contactSubmissions: ContactFormData[];

  constructor() {
    this.contactSubmissions = [];
  }

  // Simple method to store contact submissions in memory (for demo purposes)
  saveContactSubmission(submission: ContactFormData): void {
    this.contactSubmissions.push(submission);
    console.log('Contact submission received:', submission);
  }

  // Get all submissions (for debugging)
  getAllSubmissions(): ContactFormData[] {
    return this.contactSubmissions;
  }
}

export const storage = new MemStorage();