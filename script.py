import pandas as pd
import json
import re

def extract_parts(description):
    """Extract different parts from the description string."""
    # Initialize default values
    summary = description
    objective = ""
    expected_outcomes = ""
    
    # Look for Objective: and Expected Outcomes: in the text
    if "Objective:" in description:
        parts = description.split("Objective:")
        summary = parts[0].strip()
        remaining = parts[1]
        
        if "Expected Outcomes:" in remaining:
            obj_parts = remaining.split("Expected Outcomes:")
            objective = obj_parts[0].strip()
            expected_outcomes = obj_parts[1].strip()
        else:
            objective = remaining.strip()
    
    return {
        "summary": summary,
        "objective": objective,
        "expectedOutcomes": expected_outcomes
    }

def clean_statement_id(statement_id):
    """Extract numeric part from statement ID and format as PS-1xxx"""
    if isinstance(statement_id, str):
        num = re.findall(r'\d+', statement_id)
        if num:
            return f"PS-{1000 + int(num[0])}"
    return statement_id

def convert_csv_to_json(csv_file_path):
    """Convert CSV file to the required JSON format."""
    # Read CSV file
    df = pd.read_csv(csv_file_path)
    
    # Initialize list for problem statements
    problem_statements = []
    
    # Process each row
    for index, row in df.iterrows():
        description_parts = extract_parts(row['Description'])
        
        statement = {
            "id": int(row['S.No.']),
            "statementID": clean_statement_id(row['Statement_Id']),
            "title": row['Title'],
            "category": row['Category'].split(' / ')[0] if ' / ' in row['Category'] else row['Category'],
            "description": description_parts
        }
        
        problem_statements.append(statement)
    
    return problem_statements

def save_json_for_frontend(data, output_file):
    """Save the data in a format ready for frontend use."""
    # Convert to the exact format needed for frontend
    formatted_data = json.dumps(data, indent=2)
    
    # Create the complete TypeScript constant declaration
    ts_content = f"const data: ProblemStatement[] = {formatted_data};"
    
    # Save to file
    with open(output_file, 'w') as f:
        f.write(ts_content)

# Example usage
if __name__ == "__main__":
    input_file = "./problem_statements.csv"  # Replace with your CSV file path
    output_file = "problem_statements.ts"  # Output TypeScript file
    
    try:
        # Convert CSV to JSON format
        problem_statements = convert_csv_to_json(input_file)
        
        # Save as TypeScript file
        save_json_for_frontend(problem_statements, output_file)
        
        print(f"Successfully converted CSV to TypeScript format. Output saved to {output_file}")
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")