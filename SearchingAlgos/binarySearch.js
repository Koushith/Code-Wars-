[
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

function binarySearch(arr, ele) {
  var start = arr[0];
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  // check if the middle is the element which we are looking for.
  // be careful while using while - it might enter into infinite loop.
  while (arr[middle] !== ele && start <= end) {
    if (ele < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    // now the start/end value has changed. so we have to recalculate the middle
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === ele) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([2, 5, 7, 9, 11, 13, 15], 15));
