const Validation = require('../Validation')
const Utils = require('../utils')

class FileHeader {
    constructor(config) {
        this.fields = fields;
        this.setImmediateDestination(config.immediateDestination);
        this.setImmediateDestinationName(config.immediateDestinationName);
        this.setImmediateOrigin(config.immediateOrigin);
        this.setImmediateOriginName(config.immediateOriginName);

        // throw error if required fields aren't provided
        Utils.checkRequiredFields(this.fields);
    }



    setImmediateDestination(immediateDestination) {
        //console.log(Validation.validateImmediateDestinationOrOrigin(immediateDestination));
        this.fields.immediateDestination.value = immediateDestination;
    }

    setImmediateDestinationName(immediateDestinationName) {
        this.fields.immediateDestinationName.value = immediateDestinationName;
    }

    setImmediateOrigin(immediateOrigin) {
        //console.log(Validation.validateImmediateDestinationOrOrigin(immediateOrigin));
        this.fields.immediateOrigin.value = immediateOrigin;
    }

    setImmediateOriginName(immediateOriginName) {
        this.fields.immediateOriginName.value = immediateOriginName;
    }

    setFileCreationDate(fileCreationDate) {
        this.fields.fileCreationDate.value = fileCreationDate;
    }

    setFileCreationTime(fileCreationTime) {
        this.fields.fileCreationTime.value = fileCreationTime;
    }

}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(1)/",
        value: "1"
    },
    priorityCode: {
        required: true,
        position: 2,
        length: 2,
        patterm: "/(01)/",
        value: "01"
    },
    immediateDestination: {
        required: true,
        position: 4,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        value: " 123456789"
    },
    immediateOrigin: {
        required: true,
        position: 14,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        value: " 123456789"
    },
    fileCreationDate: {
        required: true,
        position: 24,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: ""
    },
    fileCreationTime: {
        required: false,
        position: 30,
        length: 4,
        patterm: "/[0-2][0-9][0-9][0-9]/",
        value: ""
    },
    fileIdModifier: {
        required: true,
        position: 33,
        length: 1,
        patterm: "/[0-9A-Z]{1}/",
        value: "A"
    },
    recordSi: {
        required: true,
        position: 35,
        length: 3,
        patterm: "/(094)/",
        value: "094"
    },
    blockingFactor: {
        required: true,
        position: 38,
        length: 2,
        patterm: "/(10)/",
        value: "10"
    },
    formatCode: {
        required: true,
        position: 10,
        length: 1,
        patterm: "/(1)/",
        value: "1"
    },
    immediateDestinationName: {
        required: false,
        position: 41,
        length: 23,
        patterm: "/[0-9\w\- ]{0,23}/",
        value: ""
    },
    immediateOriginName: {
        required: false,
        position: 64,
        length: 23,
        patterm: "/[0-9\w\- ]{0,23}/",
        value: ""
    },
    referenceCode: {
        required: false,
        position: 87,
        length: 8,
        patterm: "/[0-9\w\- ]{0,23}/",
        value: ""
    }

}

module.exports = FileHeader;