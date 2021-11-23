function bubbleSort(...nums) {
  let swapped = false;

  do {
    swapped = false;

    for(let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];

        nums.splice(i, 1, nums[i + 1]);
        nums.splice(i + 1, 1, temp);
        swapped = true;
      }
    }

  } while (swapped)

  return nums;
};

function bubbleSort2(...nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};