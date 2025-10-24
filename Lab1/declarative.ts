interface Publisher {
  publisherID: number; // PK
  name: string;
  address?: string; 
}

interface Book {
  bookID: number;        // PK
  ISBN: string;          // UNIQUE
  title: string;
  yearPublished: number;
  genre: string;
  publisherID: number;   // FK → Publisher.publisherID
}

interface Copy {
  copyID: number;        // PK
  bookID: number;        // FK → Book.bookID
  condition: string;
  isAvailable: boolean;
}

interface Author {
  authorID: number;      // PK
  fullName: string;
  birthDate?: string;    // format "YYYY-MM-DD"
}

// many-to-many
interface BookAuthor {
  bookID: number;        // PK + FK → Book.bookID
  authorID: number;      // PK + FK → Author.authorID
}

interface Member {
  memberID: number;      // PK
  fullName: string;
  email: string;         // UNIQUE
  phone: string;
  address: string;
  memberType: string;
  joinDate: string;      
}

// Позика
interface Loan {
  loanID: number;        // PK
  copyID: number;        // FK → Copy.copyID
  memberID: number;      // FK → Member.memberID
  loanDate: string;      
  dueDate: string;       
  returnDate?: string;   
  fineAmount?: number;    
}