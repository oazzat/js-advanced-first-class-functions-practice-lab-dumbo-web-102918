// Code your solution in this file!
function logDriverNames(drivers){
  function logs_name (driver){
    console.log(driver.name)
  }
  drivers.forEach(logs_name)
}

function logDriversByHometown(drivers,loc){
  function logs_home (driver){
    if (loc === driver.hometown){
    console.log(driver.name)}
  }
  drivers.forEach(logs_home)
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  let total = 0
  drivers.forEach(function(driver){
    total = total + driver.revenue
  })
  return total
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
