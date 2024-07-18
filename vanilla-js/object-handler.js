const data = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: null,
  },
  interests: {
    hobbies: ["reading", "gaming"],
    sports: null,
  },
};

testDataObject();
findNullFields(data);

function testDataObject() {
  try {
    assertNull(data.interests.sports);
    assertNull(
      data.address.state,
      "data.address.state expected to be equal to null"
    );
    console.log("testDataObject passed successfully");
  } catch (err) {
    console.error(err);
  }
}

function assertNull(param, message) {
  if (param != null) {
    let errorMessage = message
      ? message
      : `The field expected to be equal to null, but is set to "${param}"`;
    throw new Error(errorMessage);
  }
}

function getNullFields(obj) {
  let fieldNames = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === null) {
      fieldNames.push(key);
    } else if (value instanceof Object) {
      fieldNames = fieldNames.concat(getNullFields(value));
    }
  }
  return fieldNames;
}

function findNullFields(obj) {
  let fieldNames = getNullFields(obj);
  if (fieldNames.length === 0) {
    console.log("Object does not have the null fields");
    return;
  }
  for (fieldName of fieldNames) {
    console.log("Key with null value:", fieldName);
  }
}
