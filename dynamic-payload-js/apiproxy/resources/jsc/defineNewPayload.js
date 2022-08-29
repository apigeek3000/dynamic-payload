// Get signalType variable
const reqContent = JSON.parse(request.content);
const reqType = reqContent.reqType;
 
// Define payload json depending on what that variable is
var newPayload = {};
if (reqType === 'reqType1') {
    const reqType1FieldVal = reqContent.reqType1Field;
    newPayload['reqType1Field'] = reqType1FieldVal;
} else if (reqType === 'reqType2') {
    const reqType2FieldVal = reqContent.reqType2Field;
    newPayload['reqType2Field'] = reqType2FieldVal;
}

// Set the new payload
context.setVariable('request.content', JSON.stringify(newPayload));