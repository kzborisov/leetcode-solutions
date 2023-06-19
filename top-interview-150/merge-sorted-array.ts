const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
};

merge([1, 2, 3, 0, 0, 0, 4], 4, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 0);
