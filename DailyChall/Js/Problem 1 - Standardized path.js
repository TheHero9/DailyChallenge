// This problem was asked by Quora.
// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
// For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.


function returnPath(path) {


    var splitA = path.split("/");
    let newArray = [];
  
    for (let i = 0; i < splitA.length; i++) {
      if (splitA[i] === "." || splitA[i] === "") {
        continue;
      }
      if (splitA[i] === "..") {
        newArray.pop();
      } else {
        newArray.push(splitA[i]);
      }
    }
  
    var joinedArray = newArray.join("/");
    var start = "/";
  
    var result = start + joinedArray;
    return result;
  }
  
  //Tests
  console.log(returnPath("/usr/bin/../bin/./scripts/../"));
  console.log(returnPath("/../../../../../../a"));
  console.log(returnPath("/a/./b/c/"));
  console.log(returnPath("/a//b//c/////d"));
