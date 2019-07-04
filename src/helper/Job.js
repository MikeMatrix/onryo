import * as _ from "lodash/object";

class Job {

    static JOBS = {
        // Tanks
        'PLD': 'tank',
        'WAR': 'tank',
        'DRK': 'tank',
        'GNB': 'tank',
        'GLD': 'tank',
        'MRD': 'tank',
        // Healers
        'WHM': 'healer',
        'SCH': 'healer',
        'AST': 'healer',
        'CNJ': 'healer',
        // DPS
        'MNK': 'dps',
        'DRG': 'dps',
        'BRD': 'dps',
        'NIN': 'dps',
        'SMN': 'dps',
        'BLM': 'dps',
        'MCH': 'dps',
        'SAM': 'dps',
        'RDM': 'dps',
        'DNC': 'dps',
        'BLU': 'dps',
        'PGL': 'dps',
        'LNC': 'dps',
        'ARC': 'dps',
        'THM': 'dps',
        'ROG': 'dps',
        // PET
        'PET': 'pet'
    };

    static toJobName(entry) {
        let key = entry.isPet ? 'PET' : entry.JobName;
        return _.has(Job.JOBS, key) ? key : "UNKNOWN"
    }

    static toRoleName(entry) {
        let key = entry.isPet ? 'PET' : entry.JobName;
        return _.has(Job.JOBS, key) ? Job.JOBS[key] : "UNKNOWN"
    }

    static jobNameToRoleName(name) {
        return _.has(Job.JOBS, name) ? Job.JOBS[name] : "UNKNOWN";
    }
}

export default Job;