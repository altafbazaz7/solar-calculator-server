import Lead from "./LeadSchema.js";

export const createCalculationHandler = async (req, res) => {
    try {
        const { averageBill, rooftopArea, phoneNumber } = req.body;

        const panelsNeeded = Math.ceil(averageBill / 420);
        const requiredArea = panelsNeeded * 2; 
        const capitalNeeded = panelsNeeded * 60000 * 0.5; 
        const breakevenYears = Math.ceil(capitalNeeded / (averageBill * 12));
        const next25YearsEarnings = (25 - breakevenYears) * (averageBill * 12);
      
        let reqObj = {
            panelsNeeded,
            requiredArea,
            capitalNeeded,
            breakevenYears,
            next25YearsEarnings
        }
        const lead = new Lead(reqObj);
        await lead.save();

        res.json({
            panelsNeeded,
            requiredArea,
            capitalNeeded,
            breakevenYears,
            next25YearsEarnings
        });
    } catch (error) {
        console.error('Error during calculation and lead capture:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getCalculationHandler = async (req, res) => {
    try {
        const leads = await Lead.find();
        if (!leads || leads.length === 0) {
            return res.status(404).json({ message: "No calculations found" });
        }

  

        res.status(200).json(leads);
    } catch (error) {
        console.error('Error fetching calculations:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
