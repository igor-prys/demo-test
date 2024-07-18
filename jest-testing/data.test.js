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

describe("Verify data fields are empty", () => {
  test('property "state" is null', () => {
    expect(data.address.state).toBeNull();
  });

  test('property "sports" is null', () => {
    expect(data.interests.sports).toBeNull();
  });

  findNullFields(data);
});

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
