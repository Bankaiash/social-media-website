-- Add any missing columns to inquiries table and create indexes for better performance

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_service_type ON inquiries(service_type);

-- Add a trigger to automatically update a timestamp when status changes
CREATE OR REPLACE FUNCTION update_inquiry_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at column if it doesn't exist
ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS trigger_update_inquiry_updated_at ON inquiries;
CREATE TRIGGER trigger_update_inquiry_updated_at
    BEFORE UPDATE ON inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_inquiry_updated_at();

-- Add some sample inquiry statuses for better organization
COMMENT ON COLUMN inquiries.status IS 'Possible values: new, contacted, qualified, proposal_sent, won, lost, on_hold';
