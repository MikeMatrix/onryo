import * as _ from "lodash";

class Job {

    static JOBS = _.uniq([
        // Tanks
        'PLD',
        'WAR',
        'DRK',
        // Healers
        'WHM',
        'SCH',
        'AST',
        // DPS
        'MNK',
        'DRG',
        'BRD',
        'NIN',
        'SMN',
        'BLM',
        'MCH',
        'SAM',
        'RDM',
        // PET
        'PET'
    ]);

    static ROLES = _.uniq([
        'tank',
        'healer',
        'dps',
        'pet'
    ]);

    static JOB_ROLE_MAPPING = {
        // Tanks
        PLD: 'tank',
        WAR: 'tank',
        DRK: 'tank',
        // Healers
        WHM: 'healer',
        SCH: 'healer',
        AST: 'healer',
        // DPS
        MNK: 'dps',
        DRG: 'dps',
        BRD: 'dps',
        NIN: 'dps',
        SMN: 'dps',
        BLM: 'dps',
        MCH: 'dps',
        SAM: 'dps',
        RDM: 'dps'
    };

    static toJobName(entry) {
        return entry.isPet ? 'PET' : this.normalizeJobName(entry.JobName);
    }

    static toRoleName(entry) {
        return entry.isPet ? 'pet' : this.normalizeRoleName(this.jobNameToRoleName(this.normalizeJobName(entry.JobName)));
    }

    static normalizeJobName(name) {
        return _.includes(Job.JOBS, name) ? name : "UNKNOWN";
    }

    static normalizeRoleName(name) {
        return _.includes(Job.ROLES, name) ? name : "UNKNOWN";
    }

    static jobNameToRoleName(name) {
        return _.has(Job.JOB_ROLE_MAPPING, name) ? Job.JOB_ROLE_MAPPING[name] : "UNKNOWN";
    }
}

export default Job;