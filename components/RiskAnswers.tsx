type Props = {
    score: number;
}

export default function RiskAnswer({score}: Props) {
    let level;
    if (score < 9) { 
        level = 'low';
    } else if (score < 17) {
        level = 'moderate';
    } else {
        level = 'high';
    }
    const responses: Record<string, string> = {
        low: 'You are at low risk to experience a tramatic response',
        moderate: 'You are at moderate risk to experience a tramatic response',
        high: 'You are at moderate risk to experience a tramatic response'
    }

    return (
        <div>
            {responses[level]}
        </div>
    )
}