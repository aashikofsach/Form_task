

  export function wordCount(str: string) : number {
    console.log("this is working")
    console.log(str.trim().split(/\s+/).filter(Boolean).length)
    return str.trim().split(/\s+/).filter(Boolean).length;

  }

  