import { EndpointError } from "../types";
import { getReferenceValue } from "./getReferenceValue";

describe(getReferenceValue.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockRefName = "mockRefName";
  const mockRefValue = "mockRefValue";

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("returns reference value if reference exists", () => {
    it.each(["endpointParams", "referenceRecord"])("in %s", (key) => {
      const mockInput = { ref: mockRefName };
      const mockOptionsWithVal = { ...mockOptions, [key]: { [mockRefName]: mockRefValue } };
      const result = getReferenceValue(mockInput, mockOptionsWithVal);
      expect(result).toBe(mockRefValue);
    });
  });

  it("throws error if reference does not exist", () => {
    expect(() => getReferenceValue({ ref: mockRefName }, mockOptions)).toThrowError(
      new EndpointError(`Reference '${mockRefName}' not defined`)
    );
  });
});
