import * as _ from "lodash/object";

class Job {

    static JOBS = {
        0: 'UNKNOWN',
        1: 'GLA',
        2: 'PGL',
        3: 'MRD',
        4: 'LNC',
        5: 'ARC',
        6: 'CNJ',
        7: 'THM',
        8: 'CRP',
        9: 'BSM',
        10: 'ARM',
        11: 'GSM',
        12: 'LTW',
        13: 'WVR',
        14: 'ALC',
        15: 'CUL',
        16: 'MIN',
        17: 'BTN',
        18: 'FSH',
        19: 'PLD',
        20: 'MNK',
        21: 'WAR',
        22: 'DRG',
        23: 'BRD',
        24: 'WHM',
        25: 'BLM',
        26: 'ACN',
        27: 'SMN',
        28: 'SCH',
        29: 'ROG',
        30: 'NIN',
        31: 'MCH',
        32: 'DRK',
        33: 'AST',
        34: 'SAM',
        35: 'RDM',
        36: 'BLU',
        37: 'GNB',
        38: 'DNC',
    }

    static JOB_ROLES = {
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
        if (entry.isPet) {
            return 'PET';
        }

        return _.has(Job.JOBS, entry.Job) ? Job.JOBS[entry.Job] : 'UNKNOWN';
    }

    static toRoleName(entry) {
        let key = Job.toJobName(entry);
        return _.has(Job.JOB_ROLES, key) ? Job.JOB_ROLES[key] : "UNKNOWN"
    }

    static jobNameToRoleName(name) {
        return _.has(Job.JOB_ROLES, name) ? Job.JOB_ROLES[name] : "UNKNOWN";
    }
}

export default Job;
