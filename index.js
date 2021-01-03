const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, {[key]: value});
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;
    return driver;
}

const deleteFromDriverByKey = (driver, key) => {
    const driverCopy = Object.assign({}, driver);
    delete driverCopy[key];
    return driverCopy;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver;
}