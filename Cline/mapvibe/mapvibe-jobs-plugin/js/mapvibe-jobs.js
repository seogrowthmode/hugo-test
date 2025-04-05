// mapvibe-jobs.js
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('mapvibe-recent-jobs-container');
  
  if (container) {
    // Sample job listings data (you can replace this with your actual job data)
    const jobs = [
      {
        title: "Digital Marketing Specialist",
        location: "Remote",
        description: "Looking for an experienced digital marketer to help grow our online presence.",
        applyLink: "https://dannyveiga.com/contact/"
      },
      {
        title: "SEO Content Writer",
        location: "Dallas, TX",
        description: "Create SEO-optimized content that drives traffic and conversions.",
        applyLink: "https://dannyveiga.com/contact/"
      },
      {
        title: "Social Media Manager",
        location: "Remote",
        description: "Manage social media accounts and create engaging content strategies.",
        applyLink: "https://dannyveiga.com/contact/"
      }
    ];
    
    // Clear the loading message
    container.innerHTML = '';
    
    // Create a styled container for the jobs
    const jobsWrapper = document.createElement('div');
    jobsWrapper.className = 'mapvibe-jobs-wrapper';
    jobsWrapper.style.cssText = 'font-family: var(--global-body-font-family); color: var(--global-palette4);';
    
    // Add a heading
    const heading = document.createElement('h3');
    heading.textContent = 'Current Job Openings';
    heading.style.cssText = 'margin-bottom: 20px; color: var(--global-palette3);';
    jobsWrapper.appendChild(heading);
    
    // Add each job to the container
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.className = 'mapvibe-job-card';
      jobCard.style.cssText = 'background-color: #f7f9fc; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';
      
      const jobTitle = document.createElement('h4');
      jobTitle.textContent = job.title;
      jobTitle.style.cssText = 'margin-top: 0; margin-bottom: 10px; color: var(--global-palette1);';
      
      const jobLocation = document.createElement('p');
      jobLocation.innerHTML = '<strong>Location:</strong> ' + job.location;
      jobLocation.style.cssText = 'margin-bottom: 10px;';
      
      const jobDescription = document.createElement('p');
      jobDescription.textContent = job.description;
      jobDescription.style.cssText = 'margin-bottom: 15px;';
      
      const applyButton = document.createElement('a');
      applyButton.href = job.applyLink;
      applyButton.textContent = 'Apply Now';
      applyButton.style.cssText = 'display: inline-block; background-color: var(--global-palette1); color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;';
      
      jobCard.appendChild(jobTitle);
      jobCard.appendChild(jobLocation);
      jobCard.appendChild(jobDescription);
      jobCard.appendChild(applyButton);
      
      jobsWrapper.appendChild(jobCard);
    });
    
    // Add the jobs wrapper to the container
    container.appendChild(jobsWrapper);
  }
});
