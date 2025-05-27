from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange, Metric, Dimension
from google.oauth2.credentials import Credentials

# Replace with your GA4 Property ID
property_id = '478451822'

# Load credentials from token.json
credentials = Credentials.from_authorized_user_file('token.json')

# Initialize the Analytics client
client = BetaAnalyticsDataClient(credentials=credentials)

# Run the report
response = client.run_report(
    property=f"properties/{property_id}",
    date_ranges=[DateRange(start_date="7daysAgo", end_date="today")],
    metrics=[Metric(name="sessions"), Metric(name="pageviews")],
    dimensions=[Dimension(name="date")]
)

# Print the response
for row in response.rows:
    print(row)
