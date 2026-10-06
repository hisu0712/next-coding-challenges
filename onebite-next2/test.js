function solution(nums) {
  let answer = 0;

  // Set 중복 없는 값의 모음
  const set = new Set();

  nums.forEach((num) => {
    set.add(num);
  });

  const n = set.size; // 중복 없는 전체 갯수
  const r = nums.length / 2; // 고를 갯수

  if (n < r) {
    answer = n;
  } else {
    answer = r;
  }

  return answer;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
