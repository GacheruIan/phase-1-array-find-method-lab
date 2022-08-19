// code your solution here


function superbowlWin(record)

    {
    // const found = array1.find(element => element > 10); -- syntax
    let result = record.find( record => record.result === "W" );

      // const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

    const  sadReality =  result ? result.year : undefined;
    return sadReality;

  
    }

superbowlWin()

