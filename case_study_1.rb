# Prompt
# Please write a query in either SQL or ActiveRecord (as actual code or pseudo-code, depending on your preference) to answer each of the following questions:

# 1.) Find the ids of all documents which do not have any pages.
#ActiveRecord
def no_page_docs_id
    docs = Document.all.select do |document|
        document.pages.count==0
    end
    docs.map do |document|
        document.id
    end
end
# 2.) Return a list of report titles and the total number of pages in the report. Reports which do not have pages may be ignored.
#ActiveRecord
def document_has_pages?(document)
    document.pages.count>0
end

def page_count(report)
    report.documents.sum do |document|
        document.pages.count
    end
end

def reports_and_page_counts
    paged_reports = Report.all.select do |report|
        document_has_pages?
    end
    paged_reports.map do |report|

        {
            'title'=>report.title,
            'pageCount'=>page_count(report),
        }
    end
end
# 3.) How would you determine the percentage of document pages which include a footnote?
#ActiveRecord
def footnote_percentage
    all_pages = Page.all
    foot_notes = Page.all.select do |page|
        if page.footnote?
            return true
        else
            return false
        end
    end
    foot_notes.count/all_pages*100
end
# 4.) How would you search the body of a page to look for a specific search string? Any approach is welcome, though you may only use native methods, not gems or other libraries.
# ActiveRecord
def page_body_search(page_id,str)
    Page.find(page_id).body.include?(str)
end
