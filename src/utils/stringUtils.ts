

  export function wordCount(str: string) : number {
    return str.trim().split(/\s+/).filter(Boolean).length;

  }

  