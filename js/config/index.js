const CONF = {
    actionKitPageShortName: 'vote-against-torture',
    actionKitPageId: 2266,
    prettyCampaignName: 'Vote Against Torture',
    callCampaign: 'vote-against-torture',
    callPowerId: 19
};
const URLS = {
    actionKit: 'https://act.demandprogress.org/act/',
    count: 'https://act.demandprogress.org/progress/' + CONF.actionKitPageShortName + '?callback=onFetchSignatureCounts',
    facebook: 'https://www.facebook.com/sharer.php?u=',
    twitter:  'https://twitter.com/intent/tweet?text=',
    feedback: 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
};

export { CONF, URLS };