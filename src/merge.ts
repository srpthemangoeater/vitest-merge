// merge.impl.ts
export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    const mergeCollection = [...collection_1, ...collection_2, ...collection_3];
  
    // using Bubble Sort (Time Complexity : O(n^2))
    for (let i = 0; i < mergeCollection.length - 1; i++) {
      for (let j = 0; j < mergeCollection.length - 1 - i; j++) {
        if (mergeCollection[j] > mergeCollection[j + 1]) {
          const temp = mergeCollection[j];
          mergeCollection[j] = mergeCollection[j + 1];
          mergeCollection[j + 1] = temp;
        }
      }
    }

    return mergeCollection;
  }